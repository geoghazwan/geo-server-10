#!/usr/bin/python
# -*- coding: utf-8 -*-

from picamera import PiCamera
from time import sleep

camera = PiCamera()
camera.rotation = 180

camera.start_preview()
for i in range(1):

    camera.capture('/home/pi/Downloads/geo-server-10/src/utils/image.jpg')
    camera.stop_preview()
