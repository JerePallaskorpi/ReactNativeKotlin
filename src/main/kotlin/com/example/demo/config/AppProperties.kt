package com.example.demo.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component

@Component
class AppProperties {
    @Value("\${datasource.url}")
    lateinit var datasourceUrl: String

    @Value("\${datasource.driver}")
    lateinit var datasourceDriver: String

    @Value("\${datasource.username}")
    lateinit var datasourceUsername: String

    @Value("\${datasource.password}")
    lateinit var datasourcePassword: String
}
