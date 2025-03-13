from sqlalchemy import Column, Integer, String, DateTime,Boolean
from datetime import datetime
from database import Base
from sqlalchemy.orm import relationship
from database import Base
from datetime import datetime
from sqlalchemy import ForeignKey

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    registration_date = Column(DateTime, default=datetime.utcnow)
    status = Column(String, nullable=False, default="active")  # Store status as a string
    exams_taken = Column(Integer, default=0)

class Exam(Base):
    __tablename__ = "exams"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, nullable=True)
    total_questions = Column(Integer)
    time_limit = Column(Integer)  #in Hour
    passing_criteria = Column(Integer) #in percentage
    proctoring_type = Column(String)
    webcam_required = Column(Boolean, default=False)
    mic_required = Column(Boolean, default=False)
    screen_recording_required = Column(Boolean, default=False)

    questions = relationship("Question", back_populates="exam")

class Question(Base):
    __tablename__ = "questions"

    id = Column(Integer, primary_key=True, index=True)
    exam_id = Column(Integer, ForeignKey("exams.id"))  # Foreign key to Exam table
    content = Column(String)
    topic = Column(String)
    difficulty_level = Column(String)  # Options: 'Easy', 'Medium', 'Hard'
    answer = Column(String)
    is_active = Column(Boolean, default=True)

    # Establish relationship with Exam
    exam = relationship("Exam", back_populates="questions")

class ScheduledExam(Base):
    __tablename__ = "scheduled_exams"

    id = Column(Integer, primary_key=True, index=True)
    exam_id = Column(Integer)  # Exam ID reference without foreign key
    scheduled_time = Column(DateTime, default=datetime.utcnow)
    is_active = Column(Boolean, default=True)
class Voucher(Base):
    __tablename__ = "vouchers"
    id = Column(Integer, primary_key=True, index=True)
    voucher_name=Column(String,nullable=False)
    exam_type=Column(String,nullable=False)
    code = Column(String, unique=True, nullable=False)
    discount = Column(Integer, nullable=False)
    expiry_date = Column(DateTime, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    status = Column(String, default="Unused")
class Coupon(Base):
    __tablename__ = "Coupons"
    id = Column(Integer, primary_key=True, index=True)
    coupon_code = Column(String, unique=True, nullable=False)
    discount = Column(Integer, nullable=False)
    validity_period = Column(DateTime, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    applicable_exam = Column(String, nullable=False)