        const passwordBox = document.querySelector(".display")
        const passwordLength = 12;

        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWZXYZ"
        const lowerCase = "abcdefghijklmnopqrstuvwxyz"
        const numbers = "0123456789"
        const symbols = "!@#$%^&*()_?/:;'\|[{`/.,<>=+}]"
        const charList = upperCase + lowerCase + numbers + symbols

        function passwordGenerator() {
            let password = "";
            password += upperCase[Math.floor((Math.random()) * upperCase.length)]
            password += lowerCase[Math.floor((Math.random()) * lowerCase.length)]
            password += numbers[Math.floor((Math.random()) * numbers.length)]
            password += symbols[Math.floor((Math.random()) * symbols.length)]

            while (password.length < passwordLength) {
                password += charList[Math.floor((Math.random()) * charList.length)]
            }
            passwordBox.value = password
        }

        function copyPassword() {
            passwordBox.select()
            document.execCommand("copy")
        }