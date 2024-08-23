setInterval(() => {
    $target.addClass(CLASSNAME);
    setTimeout(() => {
        $target.removeClass(CLASSNAME);
    }, TIMEOUT);
    }, TIMEOUT * 2);
