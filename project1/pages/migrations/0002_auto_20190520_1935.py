# Generated by Django 2.2.1 on 2019-05-20 19:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        
    ]

    operations = [
        migrations.CreateModel(
            name='mapping',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject_id', models.PositiveIntegerField()),
                ('subject_name', models.CharField(max_length=100)),
                ('subject_seq', models.PositiveIntegerField()),
                ('chapter_id', models.PositiveIntegerField()),
                ('chapter_name', models.CharField(max_length=100)),
                ('chapter_seq', models.PositiveIntegerField()),
                ('goal_id', models.PositiveIntegerField()),
                ('goal_name', models.CharField(max_length=200)),
                ('goal_seq', models.PositiveIntegerField()),
                ('tu_id', models.PositiveIntegerField()),
                ('tu_name', models.CharField(max_length=200)),
                ('mapping_type', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='tu_lo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tu_id', models.PositiveIntegerField()),
                ('lo_id', models.PositiveIntegerField()),
                ('lo_q_link', models.URLField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='tu_video',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tu_id', models.PositiveIntegerField()),
                ('video_id', models.PositiveIntegerField()),
                ('video_name', models.CharField(max_length=100)),
                ('yt_link', models.URLField()),
            ],
        ),
        
    ]
