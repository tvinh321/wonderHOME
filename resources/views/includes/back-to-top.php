<!-- Font Awesome 5  -->
<link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>
<style>
    .progress-wrap {
        position: fixed;
        right: 30px;
        bottom: 30px;
        height: 46px;
        width: 46px;
        cursor: pointer;
        display: block;
        border-radius: 50px;
        box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.7);
        z-index: 10000;
        opacity: 0;
        visibility: hidden;
        transform: translateY(15px);
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
    }

    .progress-wrap.active-progress {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    .progress-wrap::after {
        position: absolute;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f062";
        text-align: center;
        line-height: 46px;
        font-size: 20px;
        color: #fbbf24;
        left: 0;
        top: 0;
        height: 46px;
        width: 46px;
        cursor: pointer;
        display: block;
        z-index: 1;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
    }

    .progress-wrap::before {
        position: absolute;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f062";
        text-align: center;
        line-height: 46px;
        font-size: 24px;
        opacity: 0;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        left: 0;
        top: 0;
        height: 46px;
        width: 46px;
        cursor: pointer;
        display: block;
        z-index: 2;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
    }

    .progress-wrap svg path {
        fill: none;
    }
    .progress-wrap svg.progress-circle path {
        stroke: #fbbf24; /* --- Lijn progres kleur --- */
        stroke-width: 4;
        box-sizing: border-box;
        -webkit-transition: all 200ms linear;
        transition: all 200ms linear;
    }
</style>

<!-- Back to top button -->
<div class="progress-wrap">
    <a href="#" class="back-to-top cd-top text-replace js-cd-top">
        <svg class="progress-circle svg-content" width="100%" height="100%"
        viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style="transition: stroke-dashoffset 10ms linear 0s;
            stroke-dasharray: 307.919, 307.919; stroke-dashoffset:
            266.326;">
            </path>
        </svg>
    </a>
</div>

<script src="https://code.jquery.com/jquery-3.4.0.min.js" integrity="sha384-JUMjoW8OzDJw4oFpWIB2Bu/c6768ObEthBMVSiIx4ruBIEdyNSUQAjJNFqT5pnJ6" crossorigin="anonymous"></script>
    <script>
    (function ($) {
        "use strict";

        $(document).ready(function () {
        "use strict";
        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
            } else {
            jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })
        });
    })(jQuery);
</script>