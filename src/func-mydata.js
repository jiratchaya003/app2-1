import React from "react";
export function MyAbout(){
    return (
        <div style={{textAlign: 'center', color:'#008000' ,fontsize:"100"}}>
           <h1>ข้อมูลส่วนตัว</h1> 
        </div>
    )
}
export function MyImage(){
        return(
        <div style={{textAlign: 'center'}}>
            <img src="./images/2.jpg" width="30%" higth="30%"/>
        </div>
        )
}
export function MyData (){  
    return(
            
            <div style={{textAlign: 'center'}}>
                    
                    <a>ชื่อ-นาสกุล : นางสาวจิรัชญา ผุสดี</a><br/>
                    <a>ชื่อเล่น : มิว</a><br/>
                    <a>อายุ : 21</a><br/>
                    <a>ห้อง : DT26521N</a><br/>
                    <a>สาขาวิชา : เทคโนโลยีธุรกิจดิจิทัล</a><br/>
                    <a>มหาวิทยาลัยราชมงคลสุวรรณภูมิ ศูนย์วาสุกรี</a><br/>   
                </div>
            )
}