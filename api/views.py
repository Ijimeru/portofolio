from django.shortcuts import render
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework import authentication
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from . import models
from . import serializers

# Create your views here.


@api_view(["GET"])
def get_settings(requests):
    serialize_data = serializers.SettingSerializers(
        models.Setting.objects.all(), many=True)
    return Response(serialize_data.data, status=status.HTTP_200_OK)


@api_view(["POST"])
def sendMessage(requests):

    data = requests.data
    serialize_data = serializers.MessageSerializers(data=data)
    if serialize_data.is_valid():
        serialize_data.save()
        return Response(serialize_data.data, status=status.HTTP_201_CREATED)
    return Response(serialize_data.errors, status=status.HTTP_400_BAD_REQUEST)
