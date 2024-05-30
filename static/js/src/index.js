$( e => {

    lazyload()

    Apis.checkApi()

    $('#tabApis').on('click', Apis.apis)
    $('#tabPins').on('click', Apis.pinned)
    $('#tabCrates').on('click', Apis.crates)
    $('#scrollToTopBtn').on('click', ScrollTo.top)

    $(window).on('scroll', ScrollTo.checkScroll)

    $('#readingTimePost').append(`${ ReadingTime.calculateReadingTime() } read`)

    $('.featured-search').on('input', function () {
        var searchText = $(this).val().toLowerCase()

        $('.featured-body > .item-featured').each( function () {
            var listItemText = $(this).text().toLowerCase()

            if (listItemText.includes(searchText)) {
                $(this).show()
            } else {
                $(this).hide()
            }
        })
    })

})