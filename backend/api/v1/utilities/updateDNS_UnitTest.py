'''
Run this script to test that the DNS can be properly pointed to the server.

This only tests that the call to the DNS gateway was successful.
It does NOT test that the routing to the actual server is functioning as intended.
Check the URL in a browser manually to confirm that.

'''

#this enables us to load a module from the parent directory
import sys
sys.path.append('..')

from v1.SolarProtocolClass import SolarProtocol

dnsKey = ''

#initialize SolarProtocolClass
SP = SolarProtocol()

def testDNS():

	print('Testing DNS gateway GET reqiest...')
	println("This only tests that the call to the DNS gateway was successful.")
	print("It does NOT test that the routing to the actual server is functioning as intended.")
	print("Check the URL in a browser manually to confirm that.")
	println("Successfull tests will return Errcount 0 and Done true")
	
	SP.getRequest(SP.updateDNS(SP.myIP,str(SP.getEnv('DNS_KEY'))))

testDNS()