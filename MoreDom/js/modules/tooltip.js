export default function initTooltip() {
    const tooltip = document.querySelectorAll('[data-tooltip]');
    
    const onMouseLeave = {
        tooltipBox: '',
        element: '',
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mousemove', onMouseMove);
        }
    }
    
    const onMouseMove = {
        tooltipBox: '',
        handleEvent(event) {
            this.tooltipBox.style.top = event.pageY + 20 + 'px';
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }
       
    if (tooltip) {

        tooltip.forEach((item) => {
            item.addEventListener('mouseover', onMouseOver);
        });

        function onMouseOver(event) {
            const tooltipBox = criarTooltipBox(this);

            onMouseMove.tooltipBox = tooltipBox;
            this.addEventListener('mousemove', onMouseMove);

            onMouseLeave.tooltipBox = tooltipBox;
            onMouseLeave.element = this;
            this.addEventListener('mouseleave', onMouseLeave);
        }

        function criarTooltipBox(element) {
            const tooltipBox = document.createElement('div');
            const text = element.getAttribute('aria-label');
            tooltipBox.classList.add('tooltip');
            tooltipBox.innerText = text;
            document.body.appendChild(tooltipBox);
            return tooltipBox;
        }
    }
}


