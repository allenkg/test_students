from django.db import models


class Course(models.Model):
    title = models.CharField(verbose_name='Course Title', max_length=255)
    description = models.TextField(verbose_name='Description')
    img = models.ImageField(verbose_name='Picture', blank=True, null=True, upload_to='courses')
    is_deleted = models.BooleanField(verbose_name='Deleted', default=False)

    def __str__(self):
        return self.title


class Student(models.Model):
    first_name = models.CharField(verbose_name='First name', max_length=255)
    last_name = models.CharField(verbose_name='Last name', max_length=255)
    email = models.EmailField(verbose_name="Email")
    phone_number = models.CharField(verbose_name='Phone number', max_length=100, blank=True, null=True)
    id_number = models.CharField(verbose_name='Id number', max_length=25)
    courses = models.ForeignKey(Course, related_name='courses_title', blank=True, null=True, on_delete=True)
    img = models.ImageField(verbose_name='Picture', blank=True, null=True, upload_to='students')
    is_deleted = models.BooleanField(verbose_name='Deleted', default=False)

    def __str__(self):
        return "Student - %s %s" % (self.first_name, self.last_name)

