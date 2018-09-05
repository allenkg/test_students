# Generated by Django 2.1.1 on 2018-09-04 10:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='student',
            field=models.ManyToManyField(blank=True, related_name='student', to='api.Student'),
        ),
        migrations.AlterField(
            model_name='student',
            name='courses',
            field=models.ManyToManyField(blank=True, related_name='courses_title', to='api.Course'),
        ),
    ]
