    document.addEventListener('DOMContentLoaded', function () {
                        const emojiItems = document.querySelectorAll('.emoji-item');

                        const notification = document.createElement('div');
                        notification.className = 'notification';
                        notification.textContent = 'Emoji copiado!';
                        document.body.appendChild(notification);
                        emojiItems.forEach(emoji => {
                            emoji.addEventListener('click', function () {
                                const emojiText = this.textContent;

                                const textarea = document.createElement('textarea');
                                textarea.value = emojiText;
                                textarea.setAttribute('readonly', '');
                                textarea.style.position = 'absolute';
                                textarea.style.left = '-9999px';
                                document.body.appendChild(textarea);

                                textarea.select();
                                document.execCommand('copy');

                                document.body.removeChild(textarea);

                                notification.classList.add('show');

                                setTimeout(() => {
                                    notification.classList.remove('show');
                                }, 2000);
                            });
                        });

                    });