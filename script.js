var calendar2021 = 
{
    1: {1: "Сайхан амарна"}, 
    2: {1: "Сагсны тэмцээнтэй", 
          3: "Шагнал гардуулна даа", 
          17: "Жавхлан багшийн лаб 2-ыг хийнэ"}, 
    3: {2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ", 
          6: "Энд юу бичье дээ байз", 
          8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ"}, 
    4: {1: "Бүгдээрээ худлаа ярьцаагаагаарай"}, 
    5: {10: "Энэ сард ч ёстой юу ч болдоггүй сар даа"}, 
    6: {6: "Жавхлан багшийн төрсөн өдөр"},  
    7: {4: "Хичээл амарсаан ураа"}, 
    8: {1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ"}, 
    9: {1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа"}, 
    10: {13: "Сур сур бас дахин сур"}, 
    11: {2: "Сурсаар л бай"}, 
    12: {20: "Өвлийн семистер хаагдах нь дээ", 30: "Дүн гаргаж дууслаа баярлалаа баяртай"}
}

const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const date = new Date()
const year = date.getFullYear()
const month = 1
const config = {
    show: 12,
}

function showCalendar(year, month) {
    for ( i = 0; i < config.show; i++) {
        const calendarHtml = createCalendar(year, month)
        const sec = document.createElement('section')
        sec.innerHTML = calendarHtml
        document.querySelector('#calendar').appendChild(sec)

        month++
        if (month > 12)
		{
            year++
            month = 1
        }
    }
}

function createCalendar(year, month) {
    const startDate = new Date(year, month - 1, 1)
    const endDate = new Date(year, month,  0)
    const endDayCount = endDate.getDate() 
    const lastMonthEndDate = new Date(year, month - 1, 0) 
    const lastMonthendDayCount = lastMonthEndDate.getDate()
    const startDay = startDate.getDay() 
    let dayCount = 1 
    let calendarHtml = '' 

    calendarHtml += '<h1>' + year  + '/' + month + '</h1>'
    calendarHtml += '<table>'

   
    for (let i = 0; i < weeks.length; i++) {
        calendarHtml += '<td>' + weeks[i] + '</td>'
    }

    for (let w = 0; w < 6; w++) {
        calendarHtml += '<tr>'

        for (let d = 0; d < 7; d++) {
            if (w == 0 && d < startDay) {
                let num = lastMonthendDayCount - startDay + d + 1
                calendarHtml += '<td class="is-disabled">' + num + '</td>'
            }
			 
			else if (dayCount > endDayCount) {
            
                let num = dayCount - endDayCount
                calendarHtml += '<td class="is-disabled">' + num + '</td>'
                dayCount++
            }
			else {
                calendarHtml += '<td>' + dayCount + '</td>'
                dayCount++
            }
        }
        calendarHtml += '</tr>'
    }
    calendarHtml += '</table>'

    return calendarHtml
}

showCalendar(year, month)