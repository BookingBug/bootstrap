angular.module("uib/template/datepicker/day.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("uib/template/datepicker/day.html",
    "<div aria-live=\"polite\" class=\"datepicker-selected-date sr-only\"></div>\n" +
    "<table role=\"grid\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th>\n" +
    "        <button type=\"button\"\n" +
    "          class=\"btn btn-default btn-sm pull-left uib-left\"\n" +
    "          ng-click=\"move(-1)\"\n" +
    "          ng-enter=\"move(-1)\"\n" +
    "          ng-select=\"move(-1)\"\n" +
    "          tab\n" +
    "          index=\"0\">\n" +
    "          <i aria-hidden=\"true\"\n" +
    "            class=\"glyphicon glyphicon-chevron-left\"></i>\n" +
    "          <span class=\"sr-only\">previous</span>\n" +
    "        </button>\n" +
    "      </th>\n" +
    "      <th colspan=\"{{::5 + showWeeks}}\">\n" +
    "        <button id=\"{{::uniqueId}}-title\"\n" +
    "          role=\"heading\"\n" +
    "          type=\"button\"\n" +
    "          class=\"btn btn-default btn-sm uib-title\"\n" +
    "          ng-click=\"toggleMode()\"\n" +
    "          ng-enter=\"toggleMode()\"\n" +
    "          ng-select=\"toggleMode()\"\n" +
    "          ng-disabled=\"datepickerMode === maxMode\"\n" +
    "          tabindex=\"0\">\n" +
    "          <strong>{{title}}</strong>\n" +
    "        </button>\n" +
    "      </th>\n" +
    "      <th>\n" +
    "        <button type=\"button\"\n" +
    "          class=\"btn btn-default btn-sm pull-right uib-right\"\n" +
    "          ng-click=\"move(1)\"\n" +
    "          ng-enter=\"move(1)\"\n" +
    "          ng-select=\"move(1)\"\n" +
    "          tabindex=\"0\">\n" +
    "          <i aria-hidden=\"true\" class=\"glyphicon glyphicon-chevron-right\"></i>\n" +
    "          <span class=\"sr-only\">next</span>\n" +
    "        </button>\n" +
    "      </th>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" +
    "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\" aria-label=\"{{::label.full}}\">\n" +
    "        <small aria-hidden=\"true\">{{::label.abbr}}</small>\n" +
    "      </th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody role=\"radiogroup\">\n" +
    "    <tr class=\"uib-weeks\"\n" +
    "      ng-repeat=\"row in rows track by $index\">\n" +
    "      <td ng-if=\"showWeeks\" class=\"text-center h6\">\n" +
    "        <em>{{ weekNumbers[$index] }}</em>\n" +
    "      </td>\n" +
    "      <td ng-repeat=\"dt in row\"\n" +
    "        class=\"uib-day text-center\"\n" +
    "        id=\"{{::dt.uid}}\"\n" +
    "        ng-class=\"::dt.customClass\">\n" +
    "        <button \n" +
    "          type=\"button\"\n" +
    "          class=\"btn btn-default btn-sm btn-date\"\n" +
    "          uib-is-class=\"\n" +
    "              'btn-info' for selectedDt,\n" +
    "              'active' for activeDt\n" +
    "              on dt\"\n" +
    "          ng-click=\"select(dt.date)\"\n" +
    "          ng-enter=\"select(dt.date)\"\n" +
    "          ng-select=\"select(dt.date)\"\n" +
    "          ng-disabled=\"::dt.disabled\"\n" +
    "          tabindex=\"0\"\n" +
    "          role=\"radio\"\n" +
    "          aria-checked=\"{{dt.selected ? 'true' : 'false'}}\"\n" +
    "          aria-label=\"{{:: moment(dt.date).startOf('month').add(dt.label - 1,'days').format('dddd Do MMMM') }}\">\n" +
    "          <span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span>\n" +
    "        </button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "");
}]);
