function showToast(message, type = 'success', position = 'top-right', duration = 1000) {
    // Validate type
    const validTypes = ['success', 'danger', 'warning'];
    if (!validTypes.includes(type)) {
        console.error('Invalid toast type. Use: success, danger, warning');
        return;
    }

    // Validate position
    const validPositions = ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'];
    if (!validPositions.includes(position)) {
        console.error('Invalid position. Use: top-right, top-left, bottom-right, bottom-left, top-center, bottom-center');
        position = 'top-right';
    }

    // Create or get toast container
    let container = document.querySelector(`.toast-container.${position}`);
    if (!container) {
        container = document.createElement('div');
        container.className = `toast-container ${position}`;
        document.body.appendChild(container);
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type} show`;
    toast.innerHTML = `
        <span>${message}</span>
        <button class="close-btn"></button>
    `;

    // Set countdown animation duration
    toast.style.animationDuration = `${duration}ms`;

    // Append toast to container
    container.appendChild(toast);

    // Auto-remove after duration
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300); // Wait for fade-out animation
    }, duration);

    // Close button functionality
    toast.querySelector('.close-btn').addEventListener('click', () => {
        toast.classList.remove('show');
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    });
}
