# FastAPI Application

This is a FastAPI application for managing users, exams, questions, vouchers, and coupons for admin panel.

### Description
This project provides a RESTful API for managing users, exams, questions, vouchers, and coupons using FastAPI.

### Installation

Prerequisites:
- Python 3.7+
- PostgreSQL
- Git

Steps:
1. Clone the repository: `git clone https://github.com/your-username/your-repo.git` and `cd your-repo`.
open terminal and run
pip install fastapi[all]
pip install sqlalchemy
pip install psycopg2 
2. Create and activate a virtual environment: `python -m venv venv` and `source venv/bin/activate` (On Windows use cd app/venv/Scripts and ./activate then cd .. and again cd .. the directory should be to app).
3. Install the dependencies: `pip install -r requirements.txt`.(or)
pip install uvicorn
pip install fastapi[all]
pip install sqlalchemy
pip install psycopg2
4. Set up DATABASE connection to your DATABASE `DATABASE_URL=postgresql://postgres:SafeYourWeb123@localhost:5432/fastapi` change it to
5. Go to database.py change your postgresql://servername:password@localhost:5432/databasename
Change these details with yours 
6. Run the application: `uvicorn main:app --reload`.

### Usage
To run the application locally, use the command: `uvicorn main:app --reload`. This will start the server on click on the follow link in the console(Example=`http://127.0.0.1:PORT`).

`http://127.0.0.1:PORT/docs` add /docs to url in web browser

### API Documentation
- Users:
  - `POST /users/` - Create a new user.
  - `GET /users/` - Retrieve all users.

- Exams:
  - `POST /exams/` - Create a new exam.
  - `GET /exams/` - Retrieve all exams.
  - `PUT /exams/{exam_id}/` - Update an exam.

- Questions:
  - `POST /exams/{exam_id}/questions/` - Add a question to an exam.
  - `GET /questions/` - Retrieve all questions.

- Scheduled Exams:
  - `POST /scheduled_exams/` - Schedule a new exam.

- Vouchers:
  - `POST /vouchers` - Create a new voucher.
  - `GET /vouchers` - Retrieve all vouchers.
  - `GET /vouchers/{voucher_id}` - Retrieve a specific voucher.
  - `PUT /vouchers/{voucher_id}` - Update a voucher.
  - `DELETE /vouchers/{voucher_id}` - Delete a voucher.
  - `POST /vouchers/bulk_upload` - Bulk upload vouchers via CSV.

- Coupons:
  - `POST /coupons` - Create a new coupon.
  - `GET /coupons` - Retrieve all coupons.
  - `GET /coupons/{coupon_id}` - Retrieve a specific coupon.
  - `PUT /coupons/{coupon_id}` - Update a coupon.
  - `DELETE /coupons/{coupon_id}` - Delete a coupon.


### Contributing
We welcome contributions! To contribute, fork the repository, clone your fork, create a new branch, make your changes, push your changes, and open a pull request.

### License
This project is licensed under the MIT License.


