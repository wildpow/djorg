from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes #post
from rest_framework.response import Response #post
from rest_framework import permissions
from .api import NoteSerializer #post 
from rest_framework.views import APIView
# @api_view(["POST"]) # decorator !!!!!
# @api_view(["POST"])
@permission_classes((permissions.AllowAny,))

class CreateNote(APIView):
  
  def post(self, request, format=None):
    serializer = NoteSerializer(data=request.data, context={'request': request})
    if serializer.is_valid():
      serializer.save()
      return Response({"message": "note_created"})
    else:
      return Response({"error": True, "errors": serializer.errors }) 