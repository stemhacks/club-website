$(function() {
	setTimeout(function() {
		$("#logo-container").addClass("show");
	}, 150);

	var visible = [];

	$("#text > div").each(function() {
		var _this = $(this);
		_this.find(".title, .title:before").on("foucs, click", function() {
			var content = _this.find(".content");
			if (content.hasClass("show")) {
				content.removeClass("show");
			} else {
				content.addClass("show");
			}
		});
	});
});