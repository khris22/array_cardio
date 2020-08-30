    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
  
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
        //  Khris:
           const inventorsBorn1500 = inventors.filter(function(inventor) {
                if(inventor.year >= 1500 && inventor.year < 1600)
                return inventor
            })
            console.log("Inventors born in the 1500s", inventorsBorn1500)

        // filter - pass a function that will loop over the array
            // const fifteen = inventors.filter(function(inventor) {
            //     if(inventor.year >= 1500 && inventor.year < 1600)
            //     return true
            // })
            // Refactor:
            const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)
            console.log("WesBos Answer:", fifteen)
            console.table(fifteen)
  
      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names
            const firstLast = inventors.map(function(inventor) {
                return inventor.first + ' ' + inventor.last
            })
            console.log("INVENTORS LIST:", firstLast)

        // map() takes in array, does something into a new array and returns a new array
        // will always return the same item
            const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
            console.log("WesBos Answer:", fullNames)
            

      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
            const oldToYoung = inventors.sort(function(inventor){
                return inventor.year
            })

            console.log("INVENTORS (Oldest To Youngest):", oldToYoung)

            // sort you pass in two items to sort 1 & -1
            // const ordered = inventors.sort(function(a , b){
            //     if(a.year > b.year) {
            //         return 1;
            //     } else {
            //         return -1;
            //     }
            // })
            // Refactored:
            const ordered = inventors.sort((a , b) => a.year > b.year ? 1 : -1)
            console.log("WesBos Answer:", ordered)
            console.table(ordered)

      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?
            const numYears = inventors.map((inventor) => {
                return inventor.passed - inventor.year
            }).reduce((acc,currentVal) => acc + currentVal)
            console.log("TOTAL NUMBER OF YEARS:", numYears)

            // reduce() 
            const totalYears = inventors.reduce((total, inventor) => {
                return total + (inventor.passed - inventor.year)
            }, 0)
            console.log("WesBos Answer:", totalYears)

  
      // 5. Sort the inventors by years lived
            const sortInventorByAge = inventors.sort(function(inventor){
                return inventor.passed - inventor.year
            })
            console.log("INVENTORS BY NUMBERS OF YEARS LIVED:", sortInventorByAge)

            // 
            // const sortFromOldest = inventors.sort((a, b) => {
            //     const lastPerson = a.passed - a.year;
            //     const nextPerson = b.passed - b.year;
            //     if(lastPerson > nextPerson){
            //         return 1
            //     } else {
            //         return -1
            //     }
            // })

            // Refactor:
            const sortFromOldest = inventors.sort((a, b) => {
                const lastPerson = a.passed - a.year;
                const nextPerson = b.passed - b.year;
                return lastPerson > nextPerson ? -1 : 1
            })
            console.log("WesBos Answer:", sortFromOldest)
            console.table(sortFromOldest)
  
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name  
  
      const boulevardsHasDe = ['Boulevard Auguste-Blanqui', 'Boulevard Barbès', 'Boulevard Beaumarchais', 'Boulevard de lAmiral-Bruix', 'Boulevard Mortier', 'Boulevard Poniatowski', 'Boulevard Soult', 'Boulevard des Capucines', 'Boulevard de la Chapelle', 'Boulevard de Clichy', 'Boulevard du Crime', 'Boulevard du Général-d Armée-Jean-Simon', 'Boulevard Haussmann', 'Boulevard de lHôpital', 'Boulevard des Italiens', 'Boulevard Lefebvre', 'Boulevard de la Madeleine', 'Boulevard de Magenta', 'Boulevard Marguerite-de-Rochechouart', 'Boulevard Montmartre', 'Boulevard du Montparnasse', 'Boulevard Raspail', 'Boulevard Richard-Lenoir', 'Boulevard Saint-Germain', 'Boulevard Saint-Michel', 'Boulevard de Sébastopol','Boulevard de Strasbourg', 'Boulevard du Temple','Boulevard Voltaire', 'Boulevard de la Zone']

        const deBlvd = boulevardsHasDe.filter(function(blvd) {
           return blvd.includes('de');
        })
        console.log("Boulevard that has 'de' :", deBlvd)

        // Run in wikipedia console:
        // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
        // const category = document.querySelector('.mw-category')
        // // use spread operator to turn NodeList into an array
        // // const links = [...category.querySelectorAll('a')]
        // const links = Array.from(category.querySelectorAll('a'))
        // const de = links.map(link => link.textContent).filter(name = name.includes('de'))
        // console.log("WesBos Answer :", de)


      // 7. sort Exercise
      // Sort the people alphabetically by last name
         const alphabeticalPeople =  people.sort(function(a,b) {
                return a - b
            })
        console.log("People sorted by Last Name", alphabeticalPeople)

        // convert first name and then last name
        const alpha = people.sort((lastOne, nextOne) => {
            // destructure variables
            const [aLast, aFirst] = lastOne.split(', ');
            const [bLast, bFirst] = nextOne.split(', ');
            return aLast > bLast ? 1 : -1;
        })
        console.log("WesBos Answer", alpha)
  
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
      
    // Use a hashmap
      function countEach(arr) {
        let dataCount = {}
        for(let stuff of arr){
            if(dataCount[stuff]){
                dataCount[stuff]++
            } else {
                dataCount[stuff] = 1
            }
        }
            console.log("Tally:", dataCount)
            return Object.values(dataCount).reduce((acc, currentVal) => acc + currentVal)
        }

        console.log("HOW MANY ITEMS:", countEach(data))

        const transportation = data.reduce(function(obj, item) {
            if(!obj[item]) {
                obj[item] = 0
            } 
            obj[item]++;
            return obj;
        }, {})
        // initial value is {}

        console.log("WesBos Answer:", transportation)
      