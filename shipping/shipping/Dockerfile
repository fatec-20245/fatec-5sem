FROM gradle:jdk17 AS build

WORKDIR /app
COPY . .

RUN ./gradlew clean build

FROM openjdk:17.0.1-jdk-slim AS run

RUN adduser --system --group app-user

COPY --from=build --chown=app-user:app-user /app/build/libs/shipping-*.jar app.jar

EXPOSE 8080
USER app-user

CMD ["java", "-jar", "app.jar"]