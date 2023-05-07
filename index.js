let showingView = 1
const childIds = [];
var mainViews = []

$(function (){
    mainViews = [...document.querySelectorAll('.main-view')]

    mainViews.forEach(mainView => {
        const childElement = mainView.querySelector('[id]')
        if(childElement) childIds.push(childElement.id);
    })

    $(".nav-page").on("click", (e) => {
        var str = e.target.id.split('-')[0]
        mainViews[showingView].classList.remove('main-view-show')

        for (let i = 0; i < childIds.length; i++) {
            if (childIds[i] == str){
                mainViews[i].classList.add('main-view-show')
                showingView = i
            }
        }
    })

    const aboutViews = [...document.querySelectorAll('.proyect-about')]

    $(".more-about").on("click", (e) => {
        var str = e.target.id.split('-')[0]
        var start = childIds.length - aboutViews.length

        for (let i = start; i < childIds.length; i++) {
            if(str == childIds[i]){
                mainViews[showingView].classList.remove('main-view-show')
                mainViews[i].classList.add('main-view-show')
                showingView = i
            }
        }
    })
})

function copyToClipboard() {
    console.log($("input[name='email']").val())
    var alert = document.querySelector('.alert')
    navigator.clipboard.writeText($("input[name='email']").val())
    $(alert).css("display", "block")
}