
            
            export function datesDays() {
                // TODAY
                let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                let months = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                let today = new Date();
                let month = today.getMonth();
                let datee = today.getDate();
                let day = today.getDay();
                let year = today.getFullYear();

                let newdate = days[day] + ", " + datee+ " " + months[month] + " " + year;

                let date1 = document.querySelector(".date1");
                date1.innerHTML = newdate;
                
                // TOMORROW
                let tomorrow = new Date();
                tomorrow.setDate(today.getDate() + 1);

                let month2 = tomorrow.getMonth();
                let datee2 = tomorrow.getDate();
                let day2 = tomorrow.getDay();
                let year2 = tomorrow.getFullYear();

                let newdate2 = days[day2] + ", " + datee2+ " " + months[month2] + " " + year2;
                
                
                let date2 = document.querySelector(".date2");
                date2.innerHTML = newdate2;
           
                // DAY 3
                let day3 = new Date();
                day3.setDate(today.getDate() + 2);

                let month3 = day3.getMonth();
                let datee3 = day3.getDate();
                let daythree = day3.getDay();
                let year3 = day3.getFullYear();

                let newdate3 = days[daythree] + ", " + datee3+ " " + months[month3] + " " + year3;

                let date3 = document.querySelector(".date3");
                date3.innerHTML = newdate3;

                // DAY 4
                let day4 = new Date();
                day4.setDate(today.getDate() + 3);

                let month4 = day4.getMonth();
                let datee4 = day4.getDate();
                let dayfour = day4.getDay();
                let year4 = day4.getFullYear();

                let newdate4 = days[dayfour] + ", " + datee4+ " " + months[month4] + " " + year4;

                let date4 = document.querySelector(".date4");
                date4.innerHTML = newdate4;

                // DAY 5
                let day5 = new Date();
                day5.setDate(today.getDate() + 4);

                let month5 = day5.getMonth();
                let datee5 = day5.getDate();
                let dayfive = day5.getDay();
                let year5 = day5.getFullYear();

                let newdate5 = days[dayfive] + ", " + datee5+ " " + months[month5] + " " + year5;

                let date5 = document.querySelector(".date5");
                date5.innerHTML = newdate5;
            };