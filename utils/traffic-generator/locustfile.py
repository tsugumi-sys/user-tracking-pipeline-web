from locust import HttpUser, task


class HelloWorldUser(HttpUser):
    @task
    def send_log(self):
        self.client.post(
            "/",
            json={"message": "Hello Locust!"},
            headers={"Content-Type": "application/json"},
        )
