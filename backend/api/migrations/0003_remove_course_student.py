# Generated by Django 2.1.1 on 2018-09-06 10:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20180904_1056'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='student',
        ),
    ]
