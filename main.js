$(document).ready(function() {
    var current_scroll_height = 0, prev_scroll_height = 0, trigger_scroll = true;

    $('.textarea').on('input', function() {

        current_scroll_height = this.scrollHeight;

        console.log(current_scroll_height);


        /*this.style.height = current_scroll_height + 'px';
        this.style.minHeight = current_scroll_height + 'px';
        this.style.maxHeight = current_scroll_height + 'px';*/

        if (current_scroll_height > this.clientHeight) {
            this.style.height = current_scroll_height + 'px';
            this.style.minHeight = current_scroll_height + 'px';
            this.style.maxHeight = current_scroll_height + 'px';
        }

        if (current_scroll_height < prev_scroll_height) {
            console.log(current_scroll_height);
            this.style.height = prev_scroll_height - 20 + 'px';
            this.style.minHeight = prev_scroll_height - 20 + 'px';
            this.style.maxHeight = prev_scroll_height - 20 + 'px';
        }


        prev_scroll_height = current_scroll_height;

        /*console.log(prev_scroll_height);*/

    });
});