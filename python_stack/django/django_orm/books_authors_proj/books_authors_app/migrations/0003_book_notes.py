# Generated by Django 2.2.4 on 2020-08-13 18:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books_authors_app', '0002_auto_20200813_1101'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='notes',
            field=models.TextField(null=True),
        ),
    ]
