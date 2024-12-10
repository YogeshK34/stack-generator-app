from rest_framework.views import APIView
from rest_framework.response import Response

class GenerateCard(APIView):
    def post(self, request):
        name = request.data.get('name')
        stacks = request.data.get('stacks')
        # Here you can add any backend logic for processing the data
        return Response({
            "message": f"Card generated for {name} with {len(stacks)} tech stacks"
        })