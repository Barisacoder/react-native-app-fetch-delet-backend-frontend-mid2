# Generated by Django 4.1.4 on 2022-12-30 12:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='emp',
            name='dept',
        ),
        migrations.RemoveField(
            model_name='emp',
            name='lName',
        ),
        migrations.RemoveField(
            model_name='emp',
            name='salary',
        ),
    ]
