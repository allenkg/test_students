# Generated by Django 2.1.1 on 2018-09-04 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Course Title')),
                ('description', models.TextField(verbose_name='Description')),
                ('img', models.ImageField(blank=True, null=True, upload_to='courses', verbose_name='Picture')),
                ('is_deleted', models.BooleanField(default=False, verbose_name='Deleted')),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255, verbose_name='First name')),
                ('last_name', models.CharField(max_length=255, verbose_name='Last name')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('phone_number', models.CharField(blank=True, max_length=100, null=True, verbose_name='Phone number')),
                ('id_number', models.CharField(max_length=25, verbose_name='Id number')),
                ('img', models.ImageField(blank=True, null=True, upload_to='students', verbose_name='Picture')),
                ('is_deleted', models.BooleanField(default=False, verbose_name='Deleted')),
                ('courses', models.ManyToManyField(blank=True, null=True, related_name='courses_title', to='api.Course')),
            ],
        ),
        migrations.AddField(
            model_name='course',
            name='student',
            field=models.ManyToManyField(blank=True, null=True, related_name='student', to='api.Student'),
        ),
    ]
