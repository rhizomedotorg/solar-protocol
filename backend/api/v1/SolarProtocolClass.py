import json
import requests

#print('solar protocol class in attendence')

# currently this class only handles some new functionality for solarProtocol.py.
# Refactoring is required to create additional methods and apply this to clientPostIP.py too

class SolarProtocol:
	def __init__(self):
		self.localConfigFile = "/home/pi/local/local.json"
		self.localConfigData = dict()
		self.loadLocalConfigFile()
		self.myIP = requests.get('http://whatismyip.akamai.com/').text
		# dns.solarprotocol.net isn't redirecting properly so we're using the below url for the time being
		self.dnsURL = "https://server.solarpowerforartists.com/"
		self.getEnv = "/home/pi/solar-protocol/backend/get_env.sh" #this script retrieves the environmental variables
		self.MACinterface = "wlan0"

	#load in data from config file
	def loadLocalConfigFile(self):
		#print('loading config file...')
		#load file
		try:
			with open(self.localConfigFile) as locFile:
				locData = json.load(locFile)
				for key, value in locData.items():
				    #store data
				    self.localConfigData[key] = value
		except:
			print('loadLocalConfigFile error')

	#return the config dictionary
	def getLocalConfigData(self):
		return self.localConfigData

	#returns a specific piece of local config data
	def getLocalConfig(self, key):
		#try to get data from specified key
		try:
			return self.localConfigData[key]
		except:
			print('getLocalConfig error')

			if key == 'name':
				return 'pi'
			elif key == 'httpPort':
				#should this return 80 as a default?
				return ''

	'''
	Returns the scaling factor for the module based on a standard of 50 watts
	(i.e. if a server is using a 100 watt module, it must be divided by 2,
	and if it is using a 25 watt module it must by multiplied by 2)
	In the future a more complex method that takes in to account I-V curves may need to be applied
	'''
	def pvWattsScaler(self):
		try:
			return 50.0 / float(self.localConfigData['pvWatts'])
		except:
			return 1

	def getEnv(self, thisEnv):
		#subprocess.Popen('. ./home/pi/solar-protocol/backend/get_env.sh', shell=true)
		proc = subprocess.Popen(['bash',self.getEnv,thisEnv], stdout=subprocess.PIPE)
		e = proc.stdout.read()
		#convert byte string to string
		e = e.decode("utf-8") 
		#remove line breaks
		e = e.replace("\n", "")
		return e

	#this only works with linux, but shouldn't be a problem because all the servers are linux devices
	def getMAC(self, interface):
		try:
			mac = open('/sys/class/net/'+ interface +'/address').readline()
		except:
			mac = "00:00:00:00:00:00"

		return mac

	# def getMyIP(self):
	# 	return requests.get('http://whatismyip.akamai.com/').text

	# def postDNS(url):
	# 	headers = {
	# 	    #'X-Auth-Key': KEY,
	# 	    'Content-Type': 'application/x-www-form-urlencoded',
	# 	}
	# 	dstData = "ip="+ dstIP +"&key="+str(getEnv('DNS_KEY'))
	# 	try:
	# 		x = requests.post(url, headers=headers,data = dstData, timeout=5)
	# 		print(x.text)
	# 		#print(x.json())
	# 		if x.ok:
	# 			try:
	# 				print("Post to " + dstIP+ " successful")
	# 			except:
	# 				print(x.text)
	# 		#requests.raise_for_status()
	# 	except json.decoder.JSONDecodeError as e:
	# 		print("JSON decoding error", e)
	# 	except requests.exceptions.HTTPError as errh:
	# 	 	print("An Http Error occurred:" + repr(errh))
	# 	except requests.exceptions.ConnectionError as errc:
	# 		print("An Error Connecting to the API occurred:" + repr(errc))
	# 	except requests.exceptions.Timeout as errt:
	# 	 	print("A Timeout Error occurred:" + repr(errt))
	# 	except requests.exceptions.RequestException as err:
	# 	 	print("An Unknown Error occurred" + repr(err))

	def getRequest(self, url):
		try:			
			response = requests.get(url, timeout = 5)
			print(response.text)		
		except requests.exceptions.HTTPError as err:
			print(err)
		except requests.exceptions.Timeout as err:
			print(err)
		except:
			print(err)

	#returns the url with parameters for updated the DNS
	def updateDNS(self):
		return self.dnsURL + "?ip=" + self.myIP + "&key=" + self.getEnv('DNS_KEY')

	#returns the url with parameters for retrieving the node black and white lists from the server
	#true = white list
	#false = black list
	def getNodeHashList(self, boolean):
		return self.dnsURL + "?list=" + boolean