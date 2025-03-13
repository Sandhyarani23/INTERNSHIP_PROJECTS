from pydantic import BaseModel
from typing import Literal, Optional
from datetime import datetime


# Pydantic schema for creating a user
class UserCreate(BaseModel):
    name: str
    email: str
    status: Literal["active", "suspended", "inactive"] = "active"  
    exams_taken: int = 0

    class Config:
        from_attributes = True

# Pydantic schema for creatingg exam
class ExamCreate(BaseModel):
    title: str
    description: str
    total_questions: int
    time_limit: int  # in minutes
    passing_criteria: float  # as percentage
    proctoring_type: Optional[str] = "AI"
    webcam_required: bool = False
    mic_required: bool = False
    screen_recording_required: bool = False 

class ExamUpdate(BaseModel):
    title: Optional[str]
    description: Optional[str]
    total_questions: Optional[int]
    time_limit: Optional[int]
    passing_criteria: Optional[float]
    proctoring_type: Optional[str]
    webcam_required: Optional[bool]
    mic_required: Optional[bool]
    screen_recording_required: Optional[bool]

class QuestionCreate(BaseModel):
    content: str
    topic: str
    difficulty_level: str
    answer: str
    is_active: bool = True

class ScheduledExamCreate(BaseModel):
    exam_id: int
    scheduled_time: datetime
    is_active: bool = True






class VoucherBase(BaseModel):
    voucher_name:str
    exam_type:str
    code: str
    discount: int
    expiry_date: datetime
    status: str = "Unused"

class VoucherCreate(VoucherBase):
    pass

class Voucher(VoucherBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True



class CouponBase(BaseModel):
    coupon_code : str
    discount: int
    validity_period: datetime
    applicable_exam : str

class CouponCreate(CouponBase):
    pass

class Coupon(CouponBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

