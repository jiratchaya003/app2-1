import React from  'react'

export default class Caledar extends React.Component{
    getDate(){
        const dayNames =['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์']
        const monthName = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฏาคม','สิงหาคม','กันยายน','ตุลาคม','พฤษจิกายน','ธันวาคม']



        const date = new Date()
        const weekDay = dayNames[date.getDay()]
        const day = date.getDate()
        const month = monthName[date.getMonth()]
        const year = date.getFullYear() + 543
        const dayThai = `วัน${weekDay} ที่ ${day} ${month} ${year}`
        return `วัน${weekDay} ที่ ${day} ${month} ${year}`
    }
    render(){
        return(
            <div style={{textAlign:'center'}}>{this.getDate()}</div>
        )
    }

}