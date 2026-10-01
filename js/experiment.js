/*
  "Try it yourself": a decoy-pricing experiment.

  Each visitor is randomly assigned (and remembered) to one of two groups:
    decoy   – three plans, including a café pass priced the same as the bundle
    control – the same choice without the decoy
  After they pick, the result explains the effect and shows the classic
  Economist study as small bar charts. Choices are sent to Google Analytics as
  "decoy_experiment" events, so real visitor results can be compared later.
*/
(function () {
  "use strict";

  var data = window.siteContent.experiment;
  var STORAGE_KEY = "simran-decoy-group";

  function byId(id) {
    return document.getElementById(id);
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function track(action, params) {
    if (typeof window.gtag === "function") {
      window.gtag(
        "event",
        "decoy_experiment",
        Object.assign({ action: action }, params),
      );
    }
  }

  function loadGroup() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "decoy" || saved === "control") return saved;
    } catch (error) {}
    var group = Math.random() < 0.5 ? "decoy" : "control";
    saveGroup(group);
    return group;
  }

  function saveGroup(group) {
    try {
      localStorage.setItem(STORAGE_KEY, group);
    } catch (error) {}
  }

  var plansEl = byId("lab-plans");
  var resultEl = byId("lab-result");
  var group = loadGroup();
  var reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  byId("lab-eyebrow").textContent = data.eyebrow;
  byId("lab-title").textContent = data.title;
  byId("lab-intro").textContent = data.intro;

  function renderPlans() {
    plansEl.textContent = "";
    plansEl.classList.remove("is-decided");
    var plans = data.plans.filter(function (plan) {
      return group === "decoy" || !plan.decoy;
    });
    plansEl.dataset.count = plans.length;

    plans.forEach(function (plan) {
      var button = el("button", "lab-plan");
      button.type = "button";
      button.dataset.plan = plan.id;
      button.appendChild(el("span", "lab-plan-name", plan.name));
      button.appendChild(el("span", "lab-plan-detail", plan.detail));
      var price = el("span", "lab-plan-price", plan.price);
      price.appendChild(el("span", "lab-plan-period", " " + data.pricePeriod));
      button.appendChild(price);
      button.addEventListener("click", function () {
        choose(plan.id);
      });
      plansEl.appendChild(button);
    });
  }

  function renderStudy() {
    var study = data.study;
    var wrap = el("div", "lab-study");
    wrap.appendChild(el("h4", "lab-study-heading", study.heading));
    wrap.appendChild(el("p", "lab-study-body", study.body));

    study.groups.forEach(function (studyGroup) {
      var figure = el("div", "lab-chart");
      figure.appendChild(el("p", "lab-chart-label", studyGroup.label));
      var list = el("ul", "lab-bars");
      studyGroup.rows.forEach(function (row) {
        var item = el("li", "lab-bar" + (row.highlight ? " is-highlight" : ""));
        item.appendChild(el("span", "lab-bar-label", row.label));
        var barTrack = el("span", "lab-bar-track");
        var fill = el("span", "lab-bar-fill");
        fill.dataset.value = row.value;
        barTrack.appendChild(fill);
        item.appendChild(barTrack);
        item.appendChild(el("span", "lab-bar-value", row.value + "%"));
        list.appendChild(item);
      });
      figure.appendChild(list);
      wrap.appendChild(figure);
    });

    wrap.appendChild(el("p", "lab-source", study.source));
    return wrap;
  }

  function choose(planId) {
    var copy = data.groups[group];

    plansEl.classList.add("is-decided");
    plansEl.querySelectorAll(".lab-plan").forEach(function (button) {
      var chosen = button.dataset.plan === planId;
      button.disabled = true;
      button.classList.toggle("is-chosen", chosen);
      if (chosen) button.setAttribute("aria-current", "true");
    });

    resultEl.textContent = "";
    resultEl.appendChild(el("h3", "lab-result-heading", copy.heading));
    resultEl.appendChild(
      el("p", "lab-result-choice", data.choices[group][planId]),
    );
    resultEl.appendChild(el("p", "lab-result-body", copy.body));
    resultEl.appendChild(renderStudy());
    resultEl.appendChild(el("p", "lab-closing", data.closing));

    var actions = el("div", "lab-actions");
    var retry = el("button", "lab-retry", data.links.retry);
    retry.type = "button";
    retry.addEventListener("click", function () {
      group = group === "decoy" ? "control" : "decoy";
      saveGroup(group);
      track("try_other_version", { experiment_group: group });
      resultEl.hidden = true;
      renderPlans();
      plansEl.querySelector(".lab-plan").focus();
    });
    var more = el("a", "lab-more", data.links.more.label);
    more.href = data.links.more.href;
    actions.appendChild(retry);
    actions.appendChild(more);
    resultEl.appendChild(actions);

    resultEl.hidden = false;
    resultEl.focus({ preventScroll: true });
    resultEl.scrollIntoView({
      block: "nearest",
      behavior: reduceMotion ? "auto" : "smooth",
    });

    // Grow the bars from zero once they're on the page.
    var fills = resultEl.querySelectorAll(".lab-bar-fill");
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        fills.forEach(function (fill) {
          fill.style.width = fill.dataset.value + "%";
        });
      });
    });

    track("choose_plan", { experiment_group: group, plan: planId });
  }

  renderPlans();
})();
