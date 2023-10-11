FROM python:3.11.6-alpine3.18

COPY static /app/
COPY templates /app/
COPY app.py /app/

WORKDIR /app

RUN pip install flask

CMD ["python","app.py"]