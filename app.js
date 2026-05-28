document.addEventListener('DOMContentLoaded', () => {
    const claimBtn = document.getElementById('claimBtn');
    const btnText = claimBtn.querySelector('.btn-text');
    const spinner = claimBtn.querySelector('.spinner');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    claimBtn.addEventListener('click', () => {
        // Prevent multiple clicks
        if (claimBtn.disabled) return;

        // Set loading state
        claimBtn.disabled = true;
        btnText.classList.add('hidden');
        spinner.classList.remove('hidden');

        // Simulate network request before redirecting
        setTimeout(() => {
            window.location.href = 'https:';
        }, 1500);
    });

    closeModalBtn.addEventListener('click', () => {
        successModal.classList.remove('active');
        
        // Reset amount or show a different state if needed
        const amount = document.querySelector('.amount');
        amount.textContent = '0.00';
        document.querySelector('.subtitle').textContent = 'No tienes pagos pendientes.';
        claimBtn.style.opacity = '0.5';
        claimBtn.style.pointerEvents = 'none';
        claimBtn.disabled = true;
    });
});
