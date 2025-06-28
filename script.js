function searchCommands() {
            let input = document.getElementById('searchInput').value.toLowerCase();
            let commands = document.getElementsByClassName('command');
            for (let i = 0; i < commands.length; i++) {
                let title = commands[i].getElementsByTagName('h3')[0].textContent.toLowerCase();
                let description = commands[i].getElementsByTagName('p')[0].textContent.toLowerCase();
                if (title.includes(input) || description.includes(input)) {
                    commands[i].style.display = '';
                } else {
                    commands[i].style.display = 'none';
                }
            }
        }