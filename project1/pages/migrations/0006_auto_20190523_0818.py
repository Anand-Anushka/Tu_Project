# Generated by Django 2.2.1 on 2019-05-23 08:18

from django.db import migrations, models
import pages.models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0005_auto_20190522_1808'),
    ]

    operations = [
        migrations.AlterField(
            model_name='document',
            name='document',
            field=models.FileField(storage=pages.models.OverwriteStorage(), upload_to=''),
        ),
    ]
