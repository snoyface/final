function pulse(elem, duration, easing, props_to, props_from, until) {
    elem.animate(
        props_to,
        duration,
        easing,
        function() {
            if ( until() == false )
            {
                pulse(elem, duration, easing, props_from, props_to, until);
            }
        }
    );
}

