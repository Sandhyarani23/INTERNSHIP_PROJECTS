from sqlalchemy.orm import Session
import models, schemas

def create_voucher(db: Session, voucher: schemas.VoucherCreate):
    db_voucher = models.Voucher(**voucher.dict())
    db.add(db_voucher)
    db.commit()
    db.refresh(db_voucher)
    return db_voucher

def get_vouchers(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Voucher).offset(skip).limit(limit).all()

def get_voucher(db: Session, voucher_id: int):
    return db.query(models.Voucher).filter(models.Voucher.id == voucher_id).first()

def update_voucher(db: Session, voucher_id: int, voucher: schemas.VoucherCreate):
    db_voucher = db.query(models.Voucher).filter(models.Voucher.id == voucher_id).first()
    if db_voucher is None:
        return None
    for key, value in voucher.dict().items():
        setattr(db_voucher, key, value)
    db.commit()
    db.refresh(db_voucher)
    return db_voucher

def delete_voucher(db: Session, voucher_id: int):
    db_voucher = db.query(models.Voucher).filter(models.Voucher.id == voucher_id).first()
    if db_voucher is None:
        return None
    db.delete(db_voucher)
    db.commit()
    return db_voucher
