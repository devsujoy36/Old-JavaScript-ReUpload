let data = {
    Sofhia: {
        id: 22,
        study: [
            {
                primary: [
                    {
                        school_name: 'ABC primary school'
                    },
                    {
                        location: 'Peters Burg'
                    }
                ]
            },

            {
                secondary: [
                    { 
                        school_name: 'ABC secondary school' 
                    },
                    { 
                        location: 'St Lorence' 
                    }
                ]
            }
        ]
    }
}
const ABCSchool = data.Sofhia.study[1].secondary[0].school_name;
console.log(ABCSchool);

let student = {
    2222: {
        name: 'jack',
        section: 'C',
        class: 'IX',
        address: {
            'building no': 12,
            'street': 'St. jonson',
            'city': 'PetersBurg',
            'country': 'UK'
        }
    },

    3333: {
        name: 'Sujoy',
        section: 'A',
        class: 'X',
        address: {
            'building no': 16,
            'street': 'Basakpara',
            'City': 'Jamalpur',
            'country': 'Bangladesh'
        }
    }
}
const petersBurg = student[2222].address["city"];
console.log(petersBurg)




let data2 = {
    data: [
        {
            bookId: 1,
            bookDetails: {
                name: 'Habluder Adda',
                category: 'XYZ',
                price: '20$',
            },
            bookCategory: 'Basic',
        },
        {
            bookId: 2,
            bookDetails: {
                name: 'gobluder Adda',
                category: 'ABC',
                price: '40$',
            },
            bookCategory: 'Beginner',
        }
        
    ]
}
const beginner = data2.data[1].bookCategory;
console.log(beginner);

