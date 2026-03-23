document.addEventListener('DOMContentLoaded', () => {
    const copyEmailBtn = document.getElementById('copyEmailBtn');
    const emailText = document.getElementById('emailText');
    const emailIcon = document.getElementById('emailIcon');
    const checkIcon = document.getElementById('checkIcon');
    const originalEmail = 'camilaabegg.n@gmail.com';

    copyEmailBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(originalEmail);
            
            copyEmailBtn.classList.add('success');
            emailText.textContent = 'E-mail copiado com sucesso!';
            emailIcon.classList.add('hidden');
            checkIcon.classList.remove('hidden');

            setTimeout(() => {
                copyEmailBtn.classList.remove('success');
                emailText.textContent = originalEmail;
                emailIcon.classList.remove('hidden');
                checkIcon.classList.add('hidden');
            }, 3000);

        } catch (err) {
            console.error('Falha ao copiar o e-mail: ', err);
            const textArea = document.createElement('textarea');
            textArea.value = originalEmail;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                copyEmailBtn.classList.add('success');
                emailText.textContent = 'E-mail copiado com sucesso!';
                emailIcon.classList.add('hidden');
                checkIcon.classList.remove('hidden');
                
                setTimeout(() => {
                    copyEmailBtn.classList.remove('success');
                    emailText.textContent = originalEmail;
                    emailIcon.classList.remove('hidden');
                    checkIcon.classList.add('hidden');
                }, 3000);
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
                emailText.textContent = 'Erro ao copiar';
                setTimeout(() => {
                    emailText.textContent = originalEmail;
                }, 3000);
            }
            document.body.removeChild(textArea);
        }
    });
});
