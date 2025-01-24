
$(document).ready(function() {
    StartUp()
})

function StartUp() {
    StartArrow()
    StartMenu()
}

function StartArrow() {
    $("#Arrow").fadeIn().animate({ top: -20 })
}

function StopArrow() {
    $("#Arrow").animate({ top: 0 }).fadeOut()
}

function StartLogo() {
    var homePos = $("#Home").position()
    var rootPos = $("#RootFrame").position()
    var logoX = rootPos.left + $("#RootFrame").outerWidth() + 50
    var logoY = homePos.top + 30
    $("#Logo").css({ top: logoY, left: logoX }).css({position:"fixed"}).fadeIn()
}

function StartMenu() {
    var pos = $("#Content").position()
    var menu = $("#Menu")
    menu.css({ top: pos.top }).css({position:"fixed"}).fadeIn()

    $(":header").each(function (index) {
        $(this).delay(50 * index).delay(0, function () {
            var id
            var oldid = $(this).attr("id")
            if (oldid == undefined || oldid.length == 0) {
                if (index != 0)
                    id = "menuItem" + index
                else
                    id = "menuItemTop"
                $(this).attr("id", id)
            }
            else { 
                id = oldid
            }
            var str1 = $(this).text()
            var str2 = $(this).attr("title")
            var str = str2 !== undefined
                ? str2
                : str1
            var dot = "•"
            var arrow = "→"
            var markup =
                " " +
                "<a href='#' onclick='ScrollTo(\"" + id + "\")'>" +
                str +
                "</a>" +
                "<br>"

            menu.append(markup)
        })
    })
}

function UpdateAnchor(id)
{ 
    alert("foo")
    location.href = "#" + id
}

function ScrollTo(id) {
    var top = $("#" + id).offset().top - 30
    if (id === "menuItemTop")
        top = 0
    $('html, body').animate({
        scrollTop: top
    }, 1000);
}
