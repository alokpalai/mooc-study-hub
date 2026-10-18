"""Tiny local web server for the study hub. Sends no-cache headers so edits show up on a normal refresh."""
import http.server, socketserver, os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()

socketserver.TCPServer.allow_reuse_address = True
with socketserver.ThreadingTCPServer(("", 8000), Handler) as httpd:
    print("Study hub running at http://localhost:8000  (close this window to stop)")
    httpd.serve_forever()
