from rest_framework import serializers
from . import models


class SettingSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Setting
        fields = ('id', 'name', 'content')


class MessageSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Message
        fields = ('fullname', 'email', 'message')
