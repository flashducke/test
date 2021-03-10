document.addEventListener("DOMContentLoaded", function (event) {
    //decor bg line
    let p = $('.decor-stripes path'),
        offset = 2000;

    let offsetMe = function() {
        if(offset < 0) offset = 2000;
        p.css ('strokeDashoffset', offset);
        offset--;

        requestAnimationFrame(offsetMe);
    }
    offsetMe();


    // modal
    $('.modal').on('click', function (e) {
        if (e.target.classList.contains('modal')) {
            $('.modal.show').removeClass('show');
            $('body,html').removeClass('modal-active');
        }

    });

    // form
    let $formSub = $('.modal .submit-btn');
    let $checkList = $('.modal-checklist form > label');
    $formSub.each(function () {
        let $this = $(this);
        let $form = $this.parent();

        const formSubmit = () => {
            $form.on('submit', function (sub) {
                sub.preventDefault();
                clickBtn();
            })
        }
        formSubmit();

        const clickBtn = () => {
            $this.parent().parent('.modal-item').addClass('form-send')
        }

        $this.on('click', function () {
            formSubmit();
        })
    })
    $checkList.each(function () {
        let $this = $(this);
        $this.on('click', function () {
            if ($this.find('input').is(':checked')) {
                $this.siblings('.submit-btn').click();
            }
        })
    })

});

function openModal(id) {
    $('.modal#' + id).addClass('show');
    $('body,html').addClass('modal-active');
}

function closeModal() {
    $('.modal.show').removeClass('show');
    $('body,html').removeClass('modal-active');
}