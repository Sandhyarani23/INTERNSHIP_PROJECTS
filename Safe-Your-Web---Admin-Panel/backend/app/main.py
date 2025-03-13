from fastapi import FastAPI, Depends, HTTPException, status, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
import csv
from database import engine, get_db
import models, schemas, crud
from datetime import datetime
models.Base.metadata.create_all(bind=engine)
import models
from schemas import *

app = FastAPI()

origins=[
    "http://loaclhost",
    "http://localhost:5173",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
]

app.add_middleware(CORSMiddleware,
                   allow_origins=origins,
                   allow_credentials=True,
                   allow_methods=["*"],
                   allow_headers=["*"],
                   )
@app.post("/users/")
def create_user(request: UserCreate, db: Session = Depends(get_db)):
    db_user = models.User(
        name=request.name,
        email=request.email,
        status=request.status,
        exams_taken=request.exams_taken
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get('/users/')
def get_users(db: Session = Depends(get_db)):
    users = db.query(models.User).all()
    return users

# Create a new exam
@app.post("/exams/", response_model= ExamCreate)
def create_exam(exam: ExamCreate, db: Session = Depends(get_db)):
    db_exam = models.Exam(**exam.dict())
    db.add(db_exam)
    db.commit()
    db.refresh(db_exam)
    return db_exam

# get exam
@app.get("/exams/")
def get_exams(db: Session = Depends(get_db)):
    exams = db.query(models.Exam).all()  
    return exams

# Add a question to an exam
@app.post("/exams/{exam_id}/questions/", response_model= QuestionCreate)
def add_question_to_exam(exam_id: int, question: QuestionCreate, db: Session = Depends(get_db)):
    db_question = models.Question(**question.dict(), exam_id=exam_id)
    db.add(db_question)
    db.commit()
    db.refresh(db_question)
    return db_question

# get question 
@app.get("/questions/")
def get_questions(db: Session = Depends(get_db)):
    questions = db.query(models.Question).all()  # Query Question model
    return questions

# Update an exam's details
@app.put("/exams/{exam_id}/", response_model= ExamUpdate)
def update_exam(exam_id: int, exam: ExamUpdate, db: Session = Depends(get_db)):
    db_exam = db.query(models.Exam).filter(models.Exam.id == exam_id).first()
    if not db_exam:
        raise HTTPException(status_code=404, detail="Exam not found")
    for key, value in exam.dict(exclude_unset=True).items():
        setattr(db_exam, key, value)
    db.commit()
    db.refresh(db_exam)
    return db_exam


# Schedule an exam
@app.post("/scheduled_exams/", response_model= ScheduledExamCreate)
def schedule_exam(scheduled_exam: ScheduledExamCreate, db: Session = Depends(get_db)):
    db_scheduled_exam = models.ScheduledExam(**scheduled_exam.dict())
    db.add(db_scheduled_exam)
    db.commit()
    db.refresh(db_scheduled_exam)
    return db_scheduled_exam

# Monitor live exams (this will be updated.)
@app.get("/exams/{exam_id}/monitor/")
def monitor_exam(exam_id: int):
    # Logic for live monitoring
    return {"status": "Monitoring exam in progress"}





@app.post("/vouchers", response_model=schemas.Voucher)
def create_voucher(voucher: schemas.VoucherCreate, db: Session = Depends(get_db)):
    return crud.create_voucher(db=db, voucher=voucher)

@app.get("/vouchers", response_model=List[schemas.Voucher])
def read_vouchers(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return crud.get_vouchers(db=db, skip=skip, limit=limit)

@app.get("/vouchers/{voucher_id}", response_model=schemas.Voucher)
def read_voucher(voucher_id: int, db: Session = Depends(get_db)):
    db_voucher = crud.get_voucher(db=db, voucher_id=voucher_id)
    if db_voucher is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Voucher not found")
    return db_voucher

@app.put("/vouchers/{voucher_id}", response_model=schemas.Voucher)
def update_voucher(voucher_id: int, voucher: schemas.VoucherCreate, db: Session = Depends(get_db)):
    db_voucher = crud.update_voucher(db=db, voucher_id=voucher_id, voucher=voucher)
    if db_voucher is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Voucher not found")
    return db_voucher

@app.delete("/vouchers/{voucher_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_voucher(voucher_id: int, db: Session = Depends(get_db)):
    db_voucher = crud.delete_voucher(db=db, voucher_id=voucher_id)
    if db_voucher is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Voucher not found")
    return None

@app.post("/vouchers/bulk_upload", response_model=List[schemas.Voucher])
async def bulk_upload(file: UploadFile = File(...), db: Session = Depends(get_db)):
    contents = await file.read()
    decoded = contents.decode()
    csv_reader = csv.DictReader(decoded.splitlines(), delimiter=',')
    vouchers = []
    for row in csv_reader:
        voucher = models.Voucher(
            code=row['code'],
            discount=int(row['discount']),
            expiry_date=datetime.fromisoformat(row['expiry_date']),
            status=row.get('status', 'Unused')
        )
        db.add(voucher)
        vouchers.append(voucher)
    db.commit()
    for voucher in vouchers:
        db.refresh(voucher)
    return vouchers






@app.post("/coupons", response_model=schemas.Coupon)
def create_coupon(coupon: schemas.CouponCreate, db: Session = Depends(get_db)):
    db_coupon = models.Coupon(**coupon.dict())
    db.add(db_coupon)
    db.commit()
    db.refresh(db_coupon)
    return db_coupon

@app.get("/coupons", response_model=List[schemas.Coupon])
def read_coupons(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    coupons = db.query(models.Coupon).offset(skip).limit(limit).all()
    return coupons

@app.get("/coupons/{coupon_id}", response_model=schemas.Coupon)
def read_coupon(coupon_id: int, db: Session = Depends(get_db)):
    coupon = db.query(models.Coupon).filter(models.Coupon.id == coupon_id).first()
    if coupon is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Coupon not found")
    return coupon

@app.put("/coupons/{coupon_id}", response_model=schemas.Coupon)
def update_coupon(coupon_id: int, coupon: schemas.CouponCreate, db: Session = Depends(get_db)):
    db_coupon = db.query(models.Coupon).filter(models.Coupon.id == coupon_id).first()
    if db_coupon is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Coupon not found")
    for key, value in coupon.dict().items():
        setattr(db_coupon, key, value)
    db.commit()
    db.refresh(db_coupon)
    return db_coupon

@app.delete("/coupons/{coupon_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_coupon(coupon_id: int, db: Session = Depends(get_db)):
    db_coupon = db.query(models.Coupon).filter(models.Coupon.id == coupon_id).first()
    if db_coupon is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Coupon not found")
    db.delete(db_coupon)
    db.commit()
    return None






