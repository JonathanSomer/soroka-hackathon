import http.client, urllib.request, urllib.parse, urllib.error, base64, json


class MedicalObjectClassifier:
    
    def __init__(self, prediction_key='3075f822bc1d4608b973d305148a4b34'):
        self._headers = {
            'Content-Type': 'multipart/octet-stream',
            'Prediction-key': prediction_key,
        }

    def classify(self, image_file_path):
        '''
        def _example():
            o = MedicalObjectClassifier('3075f822bc1d4608b973d305148a4b34')
            res = o.classify('path/to/oxygen/image')
            print("Results: ", res) #OxygenMask
        '''
        try:
            conn = http.client.HTTPSConnection('southcentralus.api.cognitive.microsoft.com')
            image = open(image_file_path, 'rb').read()
            conn.request("POST", "/customvision/v2.0/Prediction/88b0aa42-36e8-4305-b26f-4bf03106c684/image?iterationId=73089c8d-5168-4b48-94a5-76c177c025cf", image, self._headers)
            response = conn.getresponse()
            data = json.loads(response.read())
            filtered = [x['tagName'] for x in data['predictions'] if x['probability'] > 0.7]
            conn.close()
            if len(filtered) == 0:
                return None
            else:
                return filtered[0]
        except Exception as e:
            print("[Errno {0}] {1}".format(e.errno, e.strerror))

