import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// ข้อมูลแยกตามการ์ด (สามารถเพิ่มได้ไม่จำกัด)
const cardData = [
  {
    image: "123.jpg",
    title: "ราชาสีเงิน",
    text: "ในโลกที่ถูกแบ่งแยกด้วยสีและอำนาจ เขาเดินเพียงลำพัง—ไม่ถูกรุกล้ำ ไม่มีคำจำกัดความ และไม่หวั่นไหว เป็นเงาที่อยู่ท่ามกลางเหล่าราชา."
  },
  {
    image: "12.png",
    title: "ซาวาดะ สึนะโยชิ",
  text: "จากเด็กธรรมดาผู้อ่อนแอ สู่บอสรุ่นที่ 10 ผู้พร้อมปกป้องทุกคนด้วยหัวใจที่กล้าหาญ"
  },
  {
    image: "1.jpg",
    title: "คิริโตะ – นักดาบแห่งโลกเสมือน",
  text: "เขาคือเงาในความมืดและแสงในความหวัง เดินเดี่ยวแต่ไม่เดียวดาย ฝ่าฟันโลกเสมือนด้วยดาบคู่และจิตใจที่ไม่ยอมแพ้"
  },
  {
    image: "2.jpg",
    title: "คิรัว โซลดิ๊ก",
  text: "มือสังหารผู้เยือกเย็นจากตระกูลโซลดิ๊ก อัจฉริยะวัยเด็กผู้เลือกเส้นทางของตนเอง"
  },
  {
    image: "3.jpg",
    title: "อาซาโนะ ไทโย",
  text: "จากเด็กหนุ่มธรรมดาสู่สายลับผู้ต้องเอาตัวรอดในครอบครัวซากุระ—นิ่ง สุภาพ แต่เด็ดขาดในทุกภารกิจ"
  },
  {
    image: "4.jpg",
    title: "ทวิดาราแห่งเพลิงโชน",
  text: "พลังในตัวเขาไม่ใช่คำสาป แต่คือแสงที่พร้อมแผดเผาความมืด—เพื่ออนาคต เพื่อคำสัญญา และเพื่อคนที่เขารัก"
  },
  
  
  // เพิ่มได้เรื่อย ๆ
];

const Content = () => {
  return (
    <div className="flex-container">
      {cardData.map((item, index) => (
        <Card key={index} style={{ width: "18rem", margin: "1rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.text}</Card.Text>
            <Button variant="primary">ดูเพิ่มเติม</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Content;
