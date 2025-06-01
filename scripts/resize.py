### This script resizes images in a specified folder to a maximum size while preserving aspect ratio.

from PIL import Image
import os

input_folder = "../assets/images" # original images folder
output_folder = "../assets/resized" # desired path for resized images
max_size = (600, 600)

os.makedirs(output_folder, exist_ok=True)

for filename in os.listdir(input_folder):
    if filename.lower().endswith((".jpg", ".jpeg", ".png")):
        img_path = os.path.join(input_folder, filename)
        img = Image.open(img_path)
        img.thumbnail(max_size)  # preserves aspect ratio
        img.save(os.path.join(output_folder, filename), optimize=True, quality=80)